import mtcnaImage from './images/mtcna.png';
import './styles/Creation.css';

const Creation = () => {
  return (
    <div className="creation-container">
      <div className="card creation-card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={mtcnaImage}
              className="img-fluid rounded-start"
              alt="MTCNA"
            />
          </div>
          {/* Konten */}
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                MTCNA (MikroTik Certified Network Associate)
              </h5>
              <p className="card-text">
                MTCNA stands for MikroTik Certified Network Associate, which is
                a network certification provided by MikroTik to Network
                Engineers at the entry-level level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creation;