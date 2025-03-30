import { useLayoutEffect, useRef } from "react";
import "./SoftSkills.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";

const SoftSkills = () => {
    const { t } = useTranslation();
    const el = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline>();

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.context(() => {
            tl.current = gsap
                .timeline({
                    scrollTrigger: {
                        trigger: ".technologies-container",
                        scrub: true,
                        start: "top 850px",
                        end: "bottom 800px",
                    },
                })
                .fromTo(
                    ".technology",
                    { opacity: 0, x: 160 },
                    { opacity: 1, x: 0, stagger: 0.2 }
                );
        }, el);

        return () => {
            gsap.killTweensOf(".technologies-container");
        };
    }, []);

    const technologies = t("softSkills.technologies", {
        returnObjects: true,
    }) as Array<{
        title: string;
        description: string;
    }>;

    return (
        <section className="soft-skills" id="soft-skills" ref={el}>
            <h2 className="heading">{t("softSkills.heading")}</h2>
            <p className="letter">{t("softSkills.intro")}</p>
            <div className="technologies-container">
                {technologies.map((tech, index) => (
                    <div
                        className="technology"
                        id={`technology-${index + 1}`}
                        key={index}
                    >
                        <i
                            className={`devicon-${tech.title
                                .toLowerCase()
                                .replace(/\s+/g, "")}-plain`}
                        ></i>
                        <p className="description-icon">{tech.title}</p>
                        <p className="description">{tech.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SoftSkills;
