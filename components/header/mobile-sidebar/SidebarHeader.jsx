import Image from "next/image";
import Link from "next/link";

const SidebarHeader = () => {
  return (
    <div className="pro-header">
      <Link href="/">
        <h1 className="garosu_logo_box_mobile">
          {/* <p className="garosu_logo_mobile">시흥</p>알림방 */}
          <Image
                    src="/images/alimbang_logo.png"
                    alt="로고"
                    width={150}
                    height={40}
                    // style={{ objectFit: 'contain' }}
                    // fill
                  />
        </h1>
      </Link>
      {/* End logo */}

      <div className="fix-icon" data-bs-dismiss="offcanvas" aria-label="Close">
        <span className="flaticon-close"></span>
      </div>
      {/* icon close */}
    </div>
  );
};

export default SidebarHeader;
