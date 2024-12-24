function Iframe(props) {
  const { src, className } = props;

  return (
    <iframe
      className={className}
      src={src}
      allowFullScreen
      sandbox="allow-same-origin allow-scripts allow-popups"
    ></iframe>
  );
}

export default Iframe;
