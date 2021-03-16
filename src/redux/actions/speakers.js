import { GET_SPEAKERS } from "../type/speakers";

const SPEAKERS_LIST = [
  {
    order: 1,
    id: 12,
    name: "William Smith",
    designation: "Marketing Specialist",
    desc:
      "Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras sed accumsan neque. Ut vulputate, lectus vel aliquam congue, risus leo elementum nibh, sed faucibus nisi tortor sed ante.",
    image: "/react/images/speaker_1.jpg"
  },
  {
    order: 2,
    id: 13,
    name: "Lidia Maria Parker",
    designation: "Marketing Specialist",
    desc:
      "Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras sed accumsan neque. Ut vulputate, lectus vel aliquam congue, risus leo elementum nibh, sed faucibus nisi tortor sed ante.",
    image: "/react/images/speaker_2.jpg"
  },
  {
    order: 3,
    id: 14,
    name: "James Morrison",
    designation: "Marketing Specialist",
    desc:
      "Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras sed accumsan neque. Ut vulputate, lectus vel aliquam congue, risus leo elementum nibh, sed faucibus nisi tortor sed ante.",
    image: "/react/images/speaker_3.jpg"
  },
  {
    order: 4,
    id: 15,
    name: "Patricia Freeman",
    designation: "Marketing Specialist",
    desc:
      "Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras sed accumsan neque. Ut vulputate, lectus vel aliquam congue, risus leo elementum nibh, sed faucibus nisi tortor sed ante.",
    image: "/react/images/speaker_4.jpg"
  }
];

export const getSpeakers = () => ({
  type: GET_SPEAKERS,
  payload: SPEAKERS_LIST
});
