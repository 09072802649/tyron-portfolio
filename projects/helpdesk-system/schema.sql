-- Supabase SQL Schema for IT Help Desk System

-- 1. Create the 'tickets' table
CREATE TABLE tickets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code TEXT NOT NULL,
  reporter_name TEXT NOT NULL,
  reporter_email TEXT NOT NULL,
  device_type TEXT NOT NULL,
  category TEXT NOT NULL,
  priority TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'Open',
  description TEXT NOT NULL,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Set up Row Level Security (RLS)
-- Enable RLS on the table
ALTER TABLE tickets ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public access (since this is a portfolio demo without user auth)
-- Note: In a real production app, you would restrict these to authenticated users.

-- Allow anyone to READ tickets
CREATE POLICY "Allow public read access" ON tickets
  FOR SELECT USING (true);

-- Allow anyone to INSERT tickets
CREATE POLICY "Allow public insert access" ON tickets
  FOR INSERT WITH CHECK (true);

-- Allow anyone to UPDATE tickets
CREATE POLICY "Allow public update access" ON tickets
  FOR UPDATE USING (true);

-- Allow anyone to DELETE tickets
CREATE POLICY "Allow public delete access" ON tickets
  FOR DELETE USING (true);

-- 3. Enable Realtime Updates
-- To make auto-updating work in the UI across Admin and User views:
-- Run this block in your Supabase SQL Editor or via Database settings
BEGIN;
  DROP PUBLICATION IF EXISTS supabase_realtime;
  CREATE PUBLICATION supabase_realtime;
COMMIT;
ALTER PUBLICATION supabase_realtime ADD TABLE tickets;
