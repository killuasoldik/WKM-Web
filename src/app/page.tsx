import Schoolfo from "./components/SchoolInfo";
import SchoolSum from "./components/SummaryContent";
import Head from "./components/HeadofEp";
import Blogs from "./components/StudentsBlogs";


export default function Home() {
	return (
		<main className="mt-16">
			<Schoolfo />
			<SchoolSum />
			<Head />
			<Blogs />
		</main>
	);
}
