import "./SoftSkills.css";
import { useTranslation } from "react-i18next";

const SoftSkills = () => {
    const { t } = useTranslation();

    const technologies = t("softSkills.technologies", {
        returnObjects: true,
    }) as Array<{
        title: string;
        description: string;
        icone: string;
    }>;

    return (
        <section className="soft-skills" id="soft-skills">
            <h2 className="heading">{t("softSkills.heading")}</h2>
            <p className="letter">{t("softSkills.intro")}</p>
            <div className="technologies-container">
                {technologies.map((tech, index) => (
                    <div
                        className="technology"
                        id={`technology-${index + 1}`}
                        key={index}
                    >
                        <i className={tech.icone}></i>
                        <p className="description-icon">{tech.title}</p>
                        <p className="description">{tech.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SoftSkills;
