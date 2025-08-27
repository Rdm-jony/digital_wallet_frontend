import { motion } from "motion/react"

const Mission = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-3xl mx-auto space-y-6"
        >
            <h2 className="text-4xl font-bold">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
                We aim to build a secure and reliable financial ecosystem where
                payments are instant, transparent, and available to everyone.
                <br />
                💡 <span className="font-semibold">Core Values:</span> Security,
                Simplicity, Inclusivity, Innovation.
            </p>
        </motion.section>
    );
};

export default Mission;