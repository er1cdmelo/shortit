import { useState, useEffect } from "react";
import { FiCopy } from "react-icons/fi";
import Message from "./Message";
import "../styles/components/shortedlink.sass";

const ShortedLink = ({ url }: { url: string }) => {
  const [shorted, setShorted] = useState<string>("");
  const [msg, setMsg] = useState<boolean>(false)



  useEffect(() => {
    if (url) {
      const data: object = {
        input: url,
      };

      fetch("https://gotiny.cc/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((json) => {
          setShorted("gotiny.cc/" + json[0].code);
        })
        .catch((err) => console.log(err));
    }
  }, [url]);

  function copyToClipboard(url:string) {
    navigator.clipboard.writeText(url);
    setMsg(true)
    setTimeout(() => {
      setMsg(false)
    }, 2000)
  }

  return (
    <div id="shorted">
      {shorted ? (
        <span id="link">
          <h3>{shorted}</h3>
          <div className="copy"title="Copy it" onClick={() => copyToClipboard(shorted)}>
            <FiCopy />
          </div>
        </span>
      ) : (
        <h3>Generating link...</h3>
      )}
      {msg ? <Message text='Copied!' msgtype="success" /> : null}
    </div>
  );
};

export default ShortedLink;
