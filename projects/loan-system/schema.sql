-- Supabase SQL Schema for Loan Management System

-- 1. Profiles (replaces users table, linked to Supabase Auth)
CREATE TABLE public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    fullname TEXT,
    username TEXT UNIQUE NOT NULL,
    role TEXT CHECK (role IN ('admin', 'collector', 'borrower')) DEFAULT 'borrower',
    status TEXT CHECK (status IN ('active', 'inactive')) DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    last_login TIMESTAMP WITH TIME ZONE,
    phone TEXT,
    address TEXT,
    collector_id UUID REFERENCES public.profiles(id) -- if a borrower belongs to a collector
);

-- Enable RLS for profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public profiles are viewable by everyone." ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can insert their own profile." ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Users can update own profile." ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- 2. Loans
CREATE TABLE public.loans (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    borrower_id UUID REFERENCES public.profiles(id) NOT NULL,
    collector_id UUID REFERENCES public.profiles(id),
    loan_account_number TEXT UNIQUE,
    principal_amount NUMERIC(12,2) NOT NULL,
    total_paid NUMERIC(10,2) DEFAULT 0.00,
    remaining_balance NUMERIC(10,2) DEFAULT 0.00,
    interest_rate NUMERIC(10,2),
    loan_term INTEGER DEFAULT 1,
    payment_frequency TEXT CHECK (payment_frequency IN ('daily', 'weekly', 'monthly')) DEFAULT 'monthly',
    total_amount NUMERIC(12,2),
    installment_amount NUMERIC(10,2),
    number_of_payments INTEGER,
    start_date DATE,
    status TEXT CHECK (status IN ('pending', 'approved', 'rejected', 'ongoing', 'paid', 'completed')) DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    borrower_name TEXT,
    borrower_contact TEXT,
    borrower_address TEXT,
    balance NUMERIC(10,2) DEFAULT 0.00,
    due_date DATE
);

-- Enable RLS for loans
ALTER TABLE public.loans ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Viewable by admins, specific collector, or specific borrower" ON public.loans
    FOR SELECT USING (
        auth.uid() IN (
            SELECT id FROM public.profiles WHERE role = 'admin'
        )
        OR auth.uid() = collector_id
        OR auth.uid() = borrower_id
    );
CREATE POLICY "Insertable by admins or borrowers" ON public.loans FOR INSERT WITH CHECK (true);
CREATE POLICY "Updatable by admins or collectors" ON public.loans FOR UPDATE USING (true);

-- 3. Loan Installments
CREATE TABLE public.loan_installments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    loan_id UUID REFERENCES public.loans(id) ON DELETE CASCADE,
    installment_number INTEGER NOT NULL,
    due_date DATE NOT NULL,
    amount NUMERIC(10,2) DEFAULT 0.00,
    status TEXT CHECK (status IN ('pending', 'paid', 'overdue')) DEFAULT 'pending',
    paid_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.loan_installments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Viewable by admins, specific collector, or specific borrower" ON public.loan_installments
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.loans
            WHERE loans.id = loan_installments.loan_id
            AND (
                loans.borrower_id = auth.uid()
                OR loans.collector_id = auth.uid()
                OR EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
            )
        )
    );
CREATE POLICY "Updatable by admins or collectors" ON public.loan_installments FOR ALL USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('admin', 'collector'))
);

-- 4. Loan Requests
CREATE TABLE public.loan_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    borrower_id UUID REFERENCES public.profiles(id) NOT NULL,
    collector_id UUID REFERENCES public.profiles(id),
    principal_amount NUMERIC(12,2) NOT NULL,
    interest_rate NUMERIC(10,2),
    loan_term INTEGER,
    payment_frequency TEXT CHECK (payment_frequency IN ('daily', 'weekly', 'monthly')),
    total_amount NUMERIC(12,2),
    installment_amount NUMERIC(10,2),
    number_of_payments INTEGER,
    status TEXT CHECK (status IN ('pending', 'approved', 'rejected')) DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.loan_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Viewable by admins, collector, borrower" ON public.loan_requests FOR SELECT USING (true);
CREATE POLICY "Insertable by borrowers" ON public.loan_requests FOR INSERT WITH CHECK (auth.uid() = borrower_id);
CREATE POLICY "Updatable by admins" ON public.loan_requests FOR UPDATE USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
);

-- 5. Payments
CREATE TABLE public.payments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    loan_id UUID REFERENCES public.loans(id),
    installment_id UUID REFERENCES public.loan_installments(id),
    amount NUMERIC(10,2),
    payment_date TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    proof_image TEXT,
    status TEXT CHECK (status IN ('pending', 'approved', 'rejected')) DEFAULT 'pending',
    remitted BOOLEAN DEFAULT false,
    remittance_id UUID,
    borrower_id UUID REFERENCES public.profiles(id),
    collector_id UUID REFERENCES public.profiles(id)
);

ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Viewable by related parties" ON public.payments FOR SELECT USING (true);
CREATE POLICY "Insertable by collectors or borrowers" ON public.payments FOR INSERT WITH CHECK (true);
CREATE POLICY "Updatable by admins" ON public.payments FOR UPDATE USING (true);

-- 6. Remittances
CREATE TABLE public.remittances (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    collector_id UUID REFERENCES public.profiles(id),
    remittance_date TIMESTAMP WITH TIME ZONE,
    total_amount NUMERIC(10,2),
    transaction_count INTEGER,
    status TEXT CHECK (status IN ('pending', 'received')) DEFAULT 'pending',
    received_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.remittances ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Viewable by admins and specific collector" ON public.remittances FOR ALL USING (true);

-- 7. Notifications
CREATE TABLE public.notifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id), -- NULL means global/admin broadcast
    message TEXT,
    is_read BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    type TEXT DEFAULT 'general',
    related_id UUID,
    status TEXT DEFAULT 'unread',
    title TEXT
);

ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own notifications or admins can view global" ON public.notifications
    FOR SELECT USING (user_id = auth.uid() OR user_id IS NULL);
CREATE POLICY "Insertable by system/anyone" ON public.notifications FOR INSERT WITH CHECK (true);
CREATE POLICY "Updatable by owner" ON public.notifications FOR UPDATE USING (user_id = auth.uid() OR EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

-- Views & RPCs (Helper Functions)
-- Function to automatically update timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_loan_requests_updated_at
    BEFORE UPDATE ON public.loan_requests
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
