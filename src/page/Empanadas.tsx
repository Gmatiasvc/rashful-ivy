import type { TranslationKeys } from "@/data/translations";

import empanadaImg from "@/assets/empanada.avif"


interface ComponentProps {
  t: TranslationKeys;
}

const Hero = ({ t }: ComponentProps) => {
	return (
	  <div className="h-100 flex items-center justify-center mt-30">
		<div className="text-center w-[65%]" style={{ color: "#fb8c03" }}>
		  <div className="text-7xl font-bold mb-10">{t.emp_title_hero}</div>
		  <div className="text-xl text-black">{t.emp_desc_hero}</div>
		</div>
	  </div>
	);
  };

const EmpImg = () => {
	return(
		<div className="w-full flex items-center justify-center">
			<img src={empanadaImg} alt="" className="h-full"/>
		</div>
	)
}


function Empanadas({ t }: ComponentProps) {
  return (
	<div>
	  <Hero t={t} />
	  <EmpImg/>
	</div>
  );
}

export default Empanadas