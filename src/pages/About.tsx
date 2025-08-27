import Mission from "@/components/module/About/Mission";
import Story from "@/components/module/About/Story";
import Team from "@/components/module/About/Team";

const About = () => {
    return (
        <div className="space-y-10 my-20">
            <Story />
            <Mission />
            <Team />
        </div>
    );
};

export default About;