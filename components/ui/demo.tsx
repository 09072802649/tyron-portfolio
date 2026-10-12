import InfiniteGallery from "@/components/ui/3d-gallery-photography";
import { Sparkles, MousePointer, Move, Info } from "lucide-react";

export default function DemoOne() {
	const sampleImages = [
		{ 
			src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&auto=format&fit=crop&q=80', 
			alt: 'Yosemite National Park Valley and River' 
		},
		{ 
			src: 'https://images.unsplash.com/photo-1511497584788-87676104235f?w=1200&auto=format&fit=crop&q=80', 
			alt: 'Misty Alpine Pine Forest' 
		},
		{ 
			src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&auto=format&fit=crop&q=80', 
			alt: 'Foggy Mountains at Golden Sunrise' 
		},
		{ 
			src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&auto=format&fit=crop&q=80', 
			alt: 'Lush Forest Footpath' 
		},
		{ 
			src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&auto=format&fit=crop&q=80', 
			alt: 'Rolling Green Mountain Landscape' 
		},
		{ 
			src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80', 
			alt: 'Coastal Fjord and Mountain Lake' 
		},
		{ 
			src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&auto=format&fit=crop&q=80', 
			alt: 'Solitary Traveler in Highland Valley' 
		},
		{ 
			src: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1200&auto=format&fit=crop&q=80', 
			alt: 'Sunbeams Breaking Through Canopy' 
		},
	];

	return (
		<main className="relative min-h-screen h-full w-full bg-[#080C14] text-white overflow-hidden">
			<InfiniteGallery
				images={sampleImages}
				speed={1.2}
				zSpacing={3}
				visibleCount={12}
				falloff={{ near: 0.8, far: 14 }}
				className="h-screen w-full rounded-lg overflow-hidden"
			/>
			
			{/* Center Title Overlay */}
			<div className="h-screen inset-0 pointer-events-none fixed flex flex-col items-center justify-center text-center px-4 mix-blend-exclusion text-white select-none">
				<div className="flex items-center gap-2 mb-2 text-xs font-mono tracking-widest uppercase opacity-80">
					<Sparkles className="w-4 h-4 text-[#00F2FE]" />
					<span>Interactive 3D Experience</span>
				</div>
				<h1 className="font-serif text-5xl md:text-8xl tracking-tight font-bold">
					<span className="italic">Shadway</span>
				</h1>
				<p className="mt-3 text-xs md:text-sm font-mono tracking-wider opacity-70 max-w-md">
					Spatial photography gallery rendered with WebGL cloth physics
				</p>
			</div>

			{/* Floating Navigation Prompt */}
			<div className="text-center fixed bottom-8 left-0 right-0 font-mono uppercase text-[11px] font-semibold pointer-events-none flex flex-col items-center gap-1 z-20">
				<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-slate-300 shadow-lg">
					<MousePointer className="w-3.5 h-3.5 text-[#00F2FE]" />
					<span>Use mouse wheel, arrow keys, or touch drag</span>
					<span className="mx-1 opacity-40">|</span>
					<Move className="w-3.5 h-3.5 text-[#4FACFE]" />
					<span>Hover to wave cloth</span>
				</div>
				<div className="inline-flex items-center gap-1.5 text-[10px] text-slate-400 opacity-75 mt-1">
					<Info className="w-3 h-3 text-cyan-400" />
					<span>Auto-play resumes after 3 seconds of inactivity</span>
				</div>
			</div>
		</main>
	);
}
