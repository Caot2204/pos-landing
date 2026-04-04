import '../styles/download-buttons.css';

interface DownloadButtonProps {
  onClick: () => void;
  version?: string;
}

export default function DownloadButton(props: DownloadButtonProps) {
  return (
    <button className="download-button" onClick={props.onClick}>
      Descargar {props.version}
    </button>
  );
}