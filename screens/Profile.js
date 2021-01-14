import Layout from 'components/Layout';

export default function Profile() {
  return (
    <Layout>
      <div className="w-full lg:pt-28 flex">
        <section className="lg:mt-4 lg:mx-4 w-1/5 flex">
			<div className="w-full h-full">
				<div className="bg-white p-4 mb-4 border">
					<p className="font-bold my-3 text-center break-words">IN CONSTRUCTION</p>
				</div>
			</div>
        </section>
        <section className="ml-0 lg:ml-4 mb-8 lg:mb-4 w-full bg-white border">
			<h1 className="text-center w-full p-16">Profile Page Content (IN CONSTRUCTION)</h1>
        </section>
      </div>
    </Layout>
  );
};