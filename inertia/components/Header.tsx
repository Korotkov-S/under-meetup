import Logo from "../assets/logo.png";
import ScheduleIcon from "../assets/icons/ScheduleIcon";
import MapMarkIcon from "../assets/icons/MapMarkIcon";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row items-center gap-8">
      <div className="flex-shrink-0">
        <img src={Logo} alt="Logo" className="w-70" />
      </div>

      <div className="flex flex-col items-center sm:items-start gap-2">
        <div className="flex items-center gap-2">
          <ScheduleIcon />
          <p className="text-sub text-text-primary leading-tight">
            4 апреля с 18:00 до 21:00
          </p>
        </div>

        <h1 className="text-h1 text-text-h1 font-roboto-flex font-extra-black leading-tight">
          Under Митап #0
        </h1>
        <a href={"https://yandex.ru/maps/-/CHBSmN07"} target="_blank">
          <div className="flex items-center gap-2">
            <MapMarkIcon />
            <p className="text-text-link leading-tight">
              Владимир, отель Русь, Гагарина, 14
            </p>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
