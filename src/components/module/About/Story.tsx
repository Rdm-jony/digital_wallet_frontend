import { motion } from "motion/react"

const Story = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto space-y-6"
        >
            <h2 className="text-4xl font-bold">Our Story</h2>
            <p className="text-lg text-muted-foreground">
                Born from the vision of making financial transactions simpler and more
                accessible, our Digital Wallet empowers people to send, receive, and
                manage money with just a few taps. We started this journey to bring
                trust, speed, and inclusivity to digital finance for everyone.
            </p>
        </motion.section>
    );
};

export default Story;