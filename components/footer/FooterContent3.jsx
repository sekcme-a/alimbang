import Link from "next/link";
import footerContent, { slice } from "data/footer-content"
import { useState, useEffect } from "react";

const FooterContent3 = () => {
    //***모니터 크기 측정 */
    const [sliceTo, setSliceTo] = useState(4) //모바일 일때 푸터가 너무 길어 첫번쨰 항목만 보이게 짜를꺼임
  
    useEffect(() => {
        const handleResize = () => {
          if(window.innerWidth < 768)
            setSliceTo(3)
          else
            setSliceTo(4)
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
    //**모니터 크기 측정 끝 */

  return (
    <>
      {footerContent.slice(0, sliceTo).map((item) => (
        <div
          className="footer-column col-lg-3 col-md-6 col-sm-12"
          key={item.id}
        >
          <div className="footer-widget links-widget">
            <h4 className="widget-title" style={{fontWeight:"bold"}}>{item.title}</h4>
            <div className="widget-content">
              <ul className="list">
                {item?.menuList?.map((menu, i) => (
                  <li key={i}>
                    <Link href={menu.route}>{menu.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FooterContent3;
