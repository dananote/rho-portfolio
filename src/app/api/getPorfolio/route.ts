import { NextResponse } from "next/server";

export type TDummyPortfolioData = {
    id: number;
    title: string;
    content: string;
    image: string;
    techStack: string[];
    startDate: string;
    endDate: string;
    isPublished: boolean;
    createdAt: string;
    updatedAt: string;
};

const dummyPortfolioData: TDummyPortfolioData[] = [
    {
        id: 1,
        title: "Portfolio 1",
        content: "Portfolio 1",
        image: "https://via.placeholder.com/150",
        techStack: ["React", "Next.js", "TypeScript"],
        startDate: "2022-01-01",
        endDate: "2022-01-01",
        isPublished: true,
        createdAt: "2022-01-01",
        updatedAt: "2022-01-01",
    },
    {
        id: 2,
        title: "Portfolio 2",
        content: "Portfolio 2",
        image: "https://via.placeholder.com/150",
        techStack: ["React", "Next.js", "TypeScript"],
        startDate: "2022-01-01",
        endDate: "2022-01-01",
        isPublished: true,
        createdAt: "2022-01-01",
        updatedAt: "2022-01-01",
    },
    {
        id: 3,
        title: "Portfolio 3",
        content: "Portfolio 3",
        image: "https://via.placeholder.com/150",
        techStack: ["React", "Next.js", "TypeScript"],
        startDate: "2022-01-01",
        endDate: "2022-01-01",
        isPublished: true,
        createdAt: "2022-01-01",
        updatedAt: "2022-01-01",
    },
];    

export async function GET() {
    return NextResponse.json(dummyPortfolioData);
}
