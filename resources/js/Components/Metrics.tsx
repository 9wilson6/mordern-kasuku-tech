const metricsData = [
    { value: "2 Years", label: "Experiences" },
    { value: "4k", label: "Projects" },
    { value: "95%", label: "Satisfaction" },
    { value: "+2k", label: "Clients" },
  ];
  
  const MetricsSection = () => {
    return (
      <section className="py-10 bg-green-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-6">
          {metricsData.map((metric, index) => (
            <div
              key={index}
              className="bg-green-500 shadow-lg shadow-gray-200/50 border border-gray-100/80 p-6 md:p-5 lg:p-6 rounded-lg flex flex-col justify-center gap-0.5 text-center text-totyellow"
            >
              <span className="font-semibold text-xl sm:text-3xl md:text-4xl text-white">
                {metric.value}
              </span>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default MetricsSection;
  