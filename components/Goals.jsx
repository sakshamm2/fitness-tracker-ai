import ProgressBar from "./ProgressBar";

export default function Goals() {
  return (
    <>
      <h1>Goals</h1>

      <ProgressBar
        title="Steps Goal"
        percent={84}
      />

      <ProgressBar
        title="Calories Goal"
        percent={72}
      />

      <ProgressBar
        title="Workout Goal"
        percent={91}
      />
    </>
  );
}