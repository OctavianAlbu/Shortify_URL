const LinkComponent = (props) => {
  let buttonClass = props.link.isCopied ? "isCopied" : "notCopied";
  return (
    <div className="link-box" key={props.index}>
      <p className="full-link">{props.link.fullLink}</p>
      <a href={props.link.fullLink} className="short-link">
        {props.link.shortLink}
      </a>
      <p
        id="copy-link-button"
        className={buttonClass}
        onClick={() => props.setCopy(props.index)}
      >
        {props.link.isCopied ? "Copied!" : "Copy"}
      </p>
    </div>
  );
};

export default LinkComponent;
