import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react"
const team = [
    { name: "Jony Das", role: "Founder & CEO", img: "/team/jony.jpg" },
    { name: "Sarah Khan", role: "CTO", img: "/team/sarah.jpg" },
    { name: "Arif Rahman", role: "Lead Designer", img: "/team/arif.jpg" },
    { name: "Emily Chen", role: "Marketing Head", img: "/team/emily.jpg" },
]
const Team = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-10"
        >
            <h2 className="text-4xl font-bold text-center">Meet the Team</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                {team.map((member, idx) => (
                    <Card
                        key={idx}
                        className="text-center border border-gray-200 shadow-sm hover:shadow-md transition"
                    >
                        <CardContent className="pt-6 space-y-4 flex flex-col items-center">
                            <Avatar className="w-20 h-20">
                                <AvatarImage src={member.img} alt={member.name} />
                                <AvatarFallback>
                                    {member.name.charAt(0).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="font-semibold">{member.name}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {member.role}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </motion.section>

    );
};

export default Team;