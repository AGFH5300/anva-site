import { useMessages } from "@/hooks/use-messages";
import { motion } from "framer-motion";

export default function Home() {
  const { data: messages, isLoading, error } = useMessages();

  // Clean, minimal loading state
  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-background">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="w-12 h-12 rounded-full border border-gray-200 border-t-gray-800 animate-spin"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background p-4">
        <div className="text-destructive font-medium text-lg mb-2">Error loading content</div>
        <p className="text-muted-foreground text-sm">Please try refreshing the page.</p>
      </div>
    );
  }

  // Get the first message as requested
  const message = messages?.[0];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background relative overflow-hidden">
      {/* Abstract background element for subtle depth */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-gray-50 blur-[100px] opacity-60" />
        <div className="absolute bottom-[10%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-gray-50 blur-[80px] opacity-40" />
      </div>

      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-4xl w-full px-6 text-center"
      >
        <span className="inline-block mb-6 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase opacity-80">
          System Message
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-8 text-balance leading-[1.1]">
          {message ? message.content : "No messages found."}
        </h1>
        
        <div className="h-px w-24 bg-gray-200 mx-auto my-12" />
        
        <p className="text-muted-foreground font-light text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
          A minimalist demonstration of a fullstack application with type-safe API contracts.
        </p>
      </motion.main>

      <footer className="absolute bottom-8 text-xs text-muted-foreground/60 tracking-wider font-light">
        DESIGNED & ENGINEERING
      </footer>
    </div>
  );
}
