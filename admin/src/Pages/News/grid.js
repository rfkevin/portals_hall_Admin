const newsGridImage = (props) => (
  <div>
    <img alt={props.title} src={props.image} height={50} />
  </div>
);

export const newsGrid = [
  { type: "checkbox", width: "50" },
  {
    headerText: "image",
    width: "120",
    textAlign: "Center",
    template: newsGridImage,
  },
  { field: "title", headerText: "title", width: "150", textAlign: "Center" },
  {
    field: "text",
    headerText: "text",
    textAlign: "Center",
    width: "150",
  },
  { field: "date", headerText: "date", width: "100", textAlign: "Center" }
];
