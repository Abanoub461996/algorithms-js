const getNewId = () => {
  getMoneyInTheBank((visa) => {
    getStamp(visa, (stamp) => {
      getGraduationCertificate((certificate) => {
        getTheID(visa, certificate, function (id) {
          // Voalaaaa You have the new Identity
        });
      });
    });
  });
};
const getNewId2 = () => {
  getMoneyInTheBank()
    .then((visa) => {
      return getStamp(visa);
    })
    .then((stamp) => {
      return getGraduationCertificate(stamp);
    })
    .then((certificate) => {
      return getTheID(visa, certificate);
    })
    .then((id) => {
      // Voalaaaa You have the new Identity
    });
};

const getNewId3 = async () => {
  const visa = await getMoneyInTheBank();
  const stamp = await getStamp(visa);
  const certificate = await getGraduationCertificate(stamp);
  const id = await getTheID(visa, certificate);
  // Voalaaaa You have the new Identity
};
