interface DownloadButtonProps {
  downloadUrl: string;
  version?: string;
}

export default function DownloadButton(props: DownloadButtonProps) {
  return (
    <div className="download-button">
      <a className="link-download" href={props.downloadUrl}>
        Descargar {props.version}
      </a>
    </div>
  );
}