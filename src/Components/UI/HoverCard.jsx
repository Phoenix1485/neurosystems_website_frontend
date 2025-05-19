import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function HoverCard({ children, color = "#3b82f6" }) {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cardRef = useRef(null);

    // Maximum rotation in degrees
    const maxRotation = 6;

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();

        // Calculate relative position within the card (0 to 1)
        const relativeX = (e.clientX - rect.left) / rect.width;
        const relativeY = (e.clientY - rect.top) / rect.height;

        setMousePosition({ x: relativeX, y: relativeY });
    };

    // Calculate rotations based on mouse position
    // When mouse is at left, rotateY is positive (rotate right)
    // When mouse is at right, rotateY is negative (rotate left)
    // When mouse is at top, rotateX is negative (rotate down)
    // When mouse is at bottom, rotateX is positive (rotate up)
    const rotateX = isHovered ? (mousePosition.y - 0.5) * 2 * maxRotation : 0;
    const rotateY = isHovered ? (mousePosition.x - 0.5) * 2 * maxRotation : 0;

    return (
        <motion.div
            className="relative w-full h-full max-w-md perspective-1000"
            style={{ perspective: 800 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            ref={cardRef}
        >
            {/* The entire card that rotates */}
            <motion.div
                className="w-full h-44 rounded-2xl overflow-hidden"
                animate={{
                    rotateX: rotateX,
                    rotateY: rotateY,
                    transition: { duration: 0.1, ease: "easeOut" }
                }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Blue glow background - offset from cursor */}
                <motion.div
                    className="absolute blur-3xl rounded-full w-32 h-32 pointer-events-none"
                    animate={{
                        left: `calc(${mousePosition.x * 100}% + 30px)`,
                        top: `calc(${mousePosition.y * 100}% + 30px)`,
                        opacity: isHovered ? 0.7 : 0,
                        scale: isHovered ? 1 : 0.8,
                        backgroundColor: color
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                    }}
                    style={{
                        translateX: "-50%",
                        translateY: "-50%",
                    }}
                />

                {/* Glass card */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
                    {/* Content container */}
                    <div className="p-6 h-full">
                        {children}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}