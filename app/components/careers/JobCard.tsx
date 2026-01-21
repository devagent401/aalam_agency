import React from "react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { MapPin, Clock, Calendar } from "lucide-react";

interface JobCardProps {
    title: string;
    department: string;
    location: string;
    type: string;
    experience: string;
    description: string;
    skills: string[];
    salary: string;
    isNew?: boolean;
}

export default function JobCard({
    title,
    department,
    location,
    type,
    experience,
    description,
    skills,
    salary,
    isNew,
}: JobCardProps) {
    return (
        <div className="bg-dark-medium border border-white-primary/5 rounded-2xl p-6 md:p-8 hover:border-green-secondary/20 transition-all duration-300 group">
            <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                        {isNew && <Badge variant="gradient">NEW</Badge>}
                        <Badge variant="filled">{department.toUpperCase()}</Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-white-primary mb-4">{title}</h3>

                    <div className="flex flex-wrap gap-4 text-white-primary/60 text-sm mb-6">
                        <span className="flex items-center gap-2">
                            <MapPin size={16} className="text-green-secondary" />
                            {location}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock size={16} className="text-green-secondary" />
                            {type}
                        </span>
                        <span className="flex items-center gap-2">
                            <Calendar size={16} className="text-green-secondary" />
                            {experience}
                        </span>
                    </div>

                    <p className="text-white-primary/70 text-sm leading-relaxed mb-6 max-w-2xl">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="opacity-60">{skill}</Badge>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-end justify-between self-stretch">
                    <div className="text-right">
                        <p className="text-green-bright text-2xl font-bold mb-1">{salary}</p>
                        <p className="text-white-primary/40 text-xs">ANNUAL SALARY</p>
                    </div>

                    <Button variant="primary" className="bg-green-bright text-dark-deep font-bold px-8 py-3 rounded-xl mt-6 md:mt-0 w-full md:w-auto">
                        Apply Now
                    </Button>
                </div>
            </div>
        </div>
    );
}
