import { ColorRing } from "react-loader-spinner";

const SpinLoader = ({height,width}) => {
  return (
    <div>
      <ColorRing
        visible={true}
        height={height}
        width={width}
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#ffffff", "#f47e60", "#ffffff", "#ffffff", "#849b87"]}
      />
    </div>
  );
};

export default SpinLoader;
