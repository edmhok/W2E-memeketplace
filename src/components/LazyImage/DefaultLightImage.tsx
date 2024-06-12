import FilledImage from "./FilledImage";

export const LightIcon = () => {
  return (
    <svg width="136" height="122" viewBox="0 0 136 122" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M125.263 0H10.7368C4.65263 0 0 4.67847 0 10.7965V111.204C0 116.962 4.65263 122 10.7368 122H125.263C130.989 122 136 116.962 136 111.204V10.7965C136 5.03835 131.347 0 125.263 0ZM35.0737 18.354C41.1579 18.354 46.5263 23.3923 46.5263 29.8702C46.5263 36.3481 41.5158 41.3864 35.0737 41.3864C28.9895 41.3864 23.6211 36.3481 23.6211 29.8702C23.6211 23.3923 28.9895 18.354 35.0737 18.354ZM26.8421 105.805C25.7684 105.805 24.6947 105.445 23.6211 104.726C21.4737 102.926 21.4737 100.407 23.2632 98.2478L45.4526 66.938C47.2421 65.1386 49.7474 64.7788 51.8947 66.2183L71.2211 79.8938L105.937 42.4661C107.726 40.6667 116.316 31.3097 121.326 41.7463V105.445C121.326 105.805 26.8421 105.805 26.8421 105.805Z"
        fill="white"
        fillOpacity="0.2"
      />
    </svg>
  );
};

export const DefaultLightImage = (props: { [key: string]: any }) => {
  return <FilledImage Icon={LightIcon} theme="light" {...props} />;
};
