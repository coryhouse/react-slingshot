export default class DateHelper {
  // See tests for desired format.
  static getFormattedDateTime(date) {
    const datePart = `${date.getMonth() + 1}/${date.getDate()}`;
    const paddedMinutes = this.padLeadingZero(date.getMinutes());
    const paddedSeconds = this.padLeadingZero(date.getSeconds());
    return `${datePart} ${date.getHours()}:${paddedMinutes}:${paddedSeconds}`;
  }

  static padLeadingZero(value) {
    return value > 9 ? value : '0' + value;
  }
}
