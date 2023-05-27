import React, { Fragment } from "react";

const ShowData = (props) => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 mx-auto">
            <table className="table">
              <thead className="table-dark text-white">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Album Id</th>
                  <th scope="col">Title</th>
                  <th scope="col">Thumbnail Url</th>
                  <th scope="col">Url</th>
                </tr>
              </thead>
              <tbody>
                {
                    props.showPostData.map(data=>{
                        return(
                            <tr className="text-white" key={data.id}>
                            <th scope="row">{data.id}</th>
                            <td>{data.albumId}</td>
                            <td>{data.title}</td>
                            <td><img src={data.thumbnailUrl} alt="" /></td>
                            <td><img style={{width: 150, height: 150}} src={data.url} alt="" /></td>
                          </tr>
                        )
                    })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ShowData;
