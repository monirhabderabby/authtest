"use client";

interface Props {
  jsonplaceholderData: any;
  localData: any;
}

const Testing = ({ jsonplaceholderData, localData }: Props) => {
  console.log("jsonplaceholderData", jsonplaceholderData);
  console.log("localData", localData);
  return <div>Test</div>;
};

export default Testing;
