import { useState } from "react";
import InfiniteGallery, { type ImageItem } from "@/components/ui/3d-gallery-photography";
import { Award, ExternalLink, ShieldCheck, Sparkles, X } from "lucide-react";

interface CertificateItem {
	src: string;
	title: string;
	issuer: string;
	year: string;
	description: string;
	category: string;
}

export const CERTIFICATES: CertificateItem[] = [
	{
		src: "/assets/certificates/cyber-awareness.png",
		title: "Cyber Awareness",
		issuer: "Tech Security Cert",
		year: "2026",
		description: "In-depth coverage of contemporary social engineering, credential stuffing vectors, ransomware countermeasures, and zero-trust authentication hygiene.",
		category: "Cybersecurity",
	},
	{
		src: "/assets/certificates/web-dev-101.png",
		title: "Web Dev 101: System Integration",
		issuer: "Modern Web Institute",
		year: "2025",
		description: "Mastery of asynchronous fetch architectures, RESTful endpoints, JSON payload validation, status codes, and cross-origin resource sharing (CORS).",
		category: "Web Development",
	},
	{
		src: "/assets/certificates/qa-101.png",
		title: "QA 101: Software Quality",
		issuer: "QA Software Alliance",
		year: "2025",
		description: "Standardized defect reporting methodologies, severity vs. priority indexing, test scenario authoring, and regression test cycle management.",
		category: "Quality Assurance",
	},
	{
		src: "/assets/certificates/pro-skills.png",
		title: "Pro Skills for Tech Pros",
		issuer: "Tech Leadership Forum",
		year: "2024",
		description: "High-pressure incident communication, cross-functional collaboration between engineering and business stakeholders, and technical project management.",
		category: "Leadership & Soft Skills",
	},
	{
		src: "/assets/certificates/arduino-101.png",
		title: "Arduino 101: Coding Meets Hardware",
		issuer: "Embedded Systems Academy",
		year: "2024",
		description: "Microcontroller firmware programming in C/C++, breadboard prototyping, sensor data polling, GPIO PWM signals, and embedded hardware debugging.",
		category: "Embedded Computing",
	},
	{
		src: "/assets/certificates/cert-it-fundamentals.png",
		title: "IT Fundamentals",
		issuer: "UpskillTechPH",
		year: "2026",
		description: "Foundational knowledge in hardware, software, networking, and data structures. Overview of how organizations leverage IS for operational efficiency.",
		category: "IT Infrastructure",
	},
	{
		src: "/assets/certificates/cert-ai-prompting.png",
		title: "A.I Prompting Techniques",
		issuer: "UpskillTechPH",
		year: "2026",
		description: "Mastering the art of writing effective prompts for Large Language Models (LLMs). Strategies for context formulation, few-shot learning, and iterative refinement.",
		category: "Artificial Intelligence",
	},
	{
		src: "/assets/certificates/cert-ai-fundamentals.png",
		title: "AI Fundamentals: Automation",
		issuer: "UpskillTechPH",
		year: "2026",
		description: "Understanding the fundamentals of AI integration and automation. Demystifying AI fears by focusing on practical utility and ethical application in workflows.",
		category: "Artificial Intelligence",
	},
];

export default function Certificate3DGallery() {
	const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

	const galleryImages: ImageItem[] = CERTIFICATES.map((cert) => ({
		src: cert.src,
		alt: cert.title,
	}));

	const handleSelectImage = (_img: ImageItem, index: number) => {
		const cert = CERTIFICATES[index % CERTIFICATES.length];
		setSelectedCert(cert);
	};

	return (
		<section className="relative w-full py-16 px-4 bg-[#080C14] text-white">
			{/* Section Header */}
			<div className="text-center mb-8">
				<div className="inline-flex items-center gap-2 text-xs font-mono text-[#00F2FE] tracking-widest uppercase mb-2">
					<Award className="w-4 h-4 text-[#00F2FE]" />
					<span>07 // Badges &amp; Credentials</span>
				</div>
				<h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
					Interactive 3D Certificate Vault
				</h2>
				<p className="text-slate-400 text-sm max-w-xl mx-auto mt-2">
					Explore verified credentials suspended in real-time 3D space with dynamic cloth wave physics. Scroll or drag to browse, click any card to inspect.
				</p>
				<div className="w-20 h-1 bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] mx-auto mt-4 rounded-full" />
			</div>

			{/* 3D Canvas Container */}
			<div className="relative w-full h-[520px] md:h-[620px] rounded-2xl overflow-hidden border border-white/10 bg-slate-950/60 shadow-2xl backdrop-blur-xl">
				<InfiniteGallery
					images={galleryImages}
					speed={1.0}
					visibleCount={8}
					falloff={{ near: 0.8, far: 14 }}
					className="w-full h-full"
					onSelectImage={handleSelectImage}
				/>

				{/* Interactive Floating Badge */}
				<div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur border border-white/10 text-xs font-mono text-cyan-300">
					<Sparkles className="w-3.5 h-3.5 text-[#00F2FE] animate-pulse" />
					<span>3D Spatial Mode Active</span>
				</div>

				{/* Bottom Helper Bar */}
				<div className="absolute bottom-4 inset-x-0 mx-auto w-fit z-10 px-4 py-2 rounded-full bg-slate-900/90 backdrop-blur border border-white/10 text-[11px] font-mono text-slate-300 flex items-center gap-3 shadow-lg">
					<span>🖱️ Scroll Wheel / Touch to Fly</span>
					<span className="opacity-30">|</span>
					<span>👆 Hover to Ripple</span>
					<span className="opacity-30">|</span>
					<span className="text-[#00F2FE]">🔍 Click to Verify</span>
				</div>
			</div>

			{/* Modal Preview when a certificate is clicked */}
			{selectedCert && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
					onClick={() => setSelectedCert(null)}
				>
					<div
						className="relative max-w-2xl w-full bg-slate-900 border border-white/10 rounded-2xl p-6 shadow-2xl space-y-4"
						onClick={(e) => e.stopPropagation()}
					>
						<button
							onClick={() => setSelectedCert(null)}
							className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition"
							aria-label="Close modal"
						>
							<X className="w-5 h-5" />
						</button>

						<div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
							<ShieldCheck className="w-4 h-4" />
							<span>Verified Credential &bull; {selectedCert.year}</span>
						</div>

						<h3 className="text-xl md:text-2xl font-bold text-white">
							{selectedCert.title}
						</h3>

						<div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/40">
							<img
								src={selectedCert.src}
								alt={selectedCert.title}
								className="w-full max-h-[380px] object-contain mx-auto"
							/>
						</div>

						<div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-white/10">
							<div>
								<span className="text-slate-500">Issuer:</span>{" "}
								<span className="text-slate-200 font-semibold">{selectedCert.issuer}</span>
							</div>
							<span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-[#00F2FE] border border-cyan-500/20">
								{selectedCert.category}
							</span>
						</div>

						<p className="text-xs text-slate-400 leading-relaxed">
							{selectedCert.description}
						</p>

						<div className="flex justify-end pt-2">
							<a
								href={selectedCert.src}
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-slate-950 font-bold text-xs hover:opacity-90 transition"
							>
								<span>Open Full Resolution</span>
								<ExternalLink className="w-3.5 h-3.5" />
							</a>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
