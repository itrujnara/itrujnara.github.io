export default function InformationSection() {
  return (
    <div>
      <h2>Personal Information</h2>
      <table className="mb-4 text-lg">
        <tbody>
          <tr>
            <td className="pr-4 font-bold">Full name:</td>
            <td>Igor Trujnara</td>
          </tr>
          <tr>
            <td className="pr-4 font-bold">Year of birth:</td>
            <td>2002</td>
          </tr>
          <tr>
            <td className="pr-4 font-bold">Nationality:</td>
            <td>Polish</td>
          </tr>
          <tr>
            <td className="pr-4 font-bold">Location:</td>
            <td>Barcelona, Spain</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
