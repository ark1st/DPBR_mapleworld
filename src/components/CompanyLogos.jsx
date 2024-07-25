const CompanyLogos = () => {
    return (
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <div className="flex flex-row items-start justify-start gap-[10px] shrink-0">
          <img
            className="self-stretch w-[86px] relative max-h-full overflow-hidden shrink-0 object-cover min-h-[38px]"
            loading="lazy"
            alt=""
            src="/nxlogo579428dpng@2x.png"
          />
          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
            <div className="w-px h-[18px] relative bg-whitesmoke-200" />
          </div>
          <img
            className="self-stretch w-14 relative max-h-full overflow-hidden shrink-0 object-cover min-h-[38px]"
            loading="lazy"
            alt=""
            src="/toben4e2f6e1png@2x.png"
          />
        </div>
      </div>
    );
  };
  
  export default CompanyLogos;
  