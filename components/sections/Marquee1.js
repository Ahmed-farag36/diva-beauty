const Marquee1 = ({ data }) => {
    const { marquee } = data;
    
    return (
        <>
        <section className="marquee-section">
          <div className="marquee">
            <div className="marquee-group">
              {marquee.items.map((item, index) => (
                <div key={index} className="text" data-text={item.text}>
                  {item.text}
                </div>
              ))}
            </div>
      
            <div aria-hidden="true" className="marquee-group">
              {marquee.items.map((item, index) => (
                <div key={`copy-${index}`} className="text" data-text={item.text}>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </section>
        </>
    );
};

export default Marquee1;
