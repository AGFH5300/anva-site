const NAV_LOGO_VIEWBOX_WIDTH = 420;
const NAV_LOGO_VIEWBOX_HEIGHT = 96;

export default function NavLogoLottie() {
  return (
    <div
      className="nav-logo-lottie"
      aria-hidden="true"
      style={{ width: "320px", height: "74px" }}
    >
      <div className="nav-logo-lottie__viewport">
        <svg
          viewBox={`0 0 ${NAV_LOGO_VIEWBOX_WIDTH} ${NAV_LOGO_VIEWBOX_HEIGHT}`}
          className="h-full w-full"
          role="presentation"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path
              d="M28 79L71 16h26l44 63H110l-11-17H69L58 79H28Zm50-39h14L85 29 78 40Z"
              fill="#FFFFFF"
            />
            <path
              d="M149 79V16h23l53 36V16h29v63h-23l-53-36v36h-29Z"
              fill="#FFFFFF"
            />
            <path
              d="M264 16h32l21 38 22-38h31l-39 63h-28l-39-63Z"
              fill="#FDB004"
            />
            <path
              d="M335 79l43-63h26l44 63h-31l-11-17h-30l-11 17h-30Zm50-39h14l-7-11-7 11Z"
              fill="#FDB004"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
