import Assignment from "../components/Assignment";
import Notifications from "../components/Notification";
import Quiz from "../components/Quiz";

export default function DashboardPage() {
  return (
    <>
      <Assignment />
      <Notifications />
      <Quiz />
    </>
  );
}
