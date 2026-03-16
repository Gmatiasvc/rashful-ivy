import sectionSeparator from "@/assets/sepatator.avif";

export const Separator = () => {
	return (
	  <div className="w-full flex justify-center py-4 ">
		<img
		  src={sectionSeparator}
		  className="h-12 object-cover w-full"
		  alt="Separator"
		/>
	  </div>
	);
  };
  
export default Separator;