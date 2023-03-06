import React, { useEffect, useState } from 'react';
// import axios from 'axios';

function PublicationItem({ id, title, authors, doi, publisher, year, lang, link, hazard, name_adm1, name_dmf_sub }) {
  // const [publications, setPublications] = useState([]);

  // useEffect(() => {
  //   const fetchPublications = async () => {
  //     try {
  //       const response = await axios.get('http://159.223.36.31/api/v1/publications', {
  //         headers: {
  //           token: '0d9460395f75235feb673c61a030cf01605412bdd6a56f6c630b3c4d09d582e3b910a3c0008fc022',
  //         },
  //       });
  //       setPublications(response.data.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchPublications();
  // }, []);

  return (
    <div className="px-5 ">
      <div className=" sm:mt-10 hover:-translate-y-2 p-5 transition transform rounded-md ">
        <h1 className="text-gray-800 dark:text-gray-200 text-lg font-bold leading-6 truncate">{title}</h1>
        <h1 className="text-gray-800 dark:text-gray-200 text-lg font-bold leading-6 truncate">{id}</h1>
        <p className="text-gray-800 dark:text-gray-200 mb-5">{authors}</p>
        <p className="text-gray-800 dark:text-gray-200 mb-5">{doi}</p>
        <p className="text-gray-800 dark:text-gray-200 mb-5">{publisher}</p>
        <p className="text-gray-800 dark:text-gray-200 mb-5">{year}</p>
        <p className="text-gray-800 dark:text-gray-200 mb-5">{lang}</p>
      </div>
    </div>
  );
}

export default PublicationItem;
