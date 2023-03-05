import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PublicationData() {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await axios.get('http://159.223.36.31/api/v1/publications', {
          headers: {
            token: '0d9460395f75235feb673c61a030cf01605412bdd6a56f6c630b3c4d09d582e3b910a3c0008fc022',
          },
        });
        setPublications(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPublications();
  }, []);

  return (
    <div>
      <h1>List of Publications</h1>
      {publications.map((publication) => (
        <div key={publication.id}>
          <h3>{publication.title}</h3>
          <p>{publication.authors}</p>
          <p>{publication.doi}</p>
          <p>{publication.publisher}</p>
        </div>
      ))}
    </div>
  );
}

export default PublicationData;
