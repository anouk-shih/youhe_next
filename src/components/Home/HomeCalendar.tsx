import styles from "@/styles/Home.module.sass";

export default function Calendar() {
  return (
    <section className={styles.calendar}>
      <iframe
        title="google calendar"
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FTaipei&src=Y2hvdXl1aW5nQGdtYWlsLmNvbQ&src=anM3dHFvOHJmNGc2ajltMDhpaTE1NDkxcXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=cjhuYWF2YjZiZTBuOWxvZWhrdXA4dm1jdWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=MDMwcDV0azU5ZG1tMDkwM2M2OG5ydDBjMm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=bHU0M21jbzVhNHAybXBoNWxvczJ2ODNsdGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=cTlnYW1kbTRhOG4xaWE2NWl1czJ0aGc5NzBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=cGNtNnVscmtub25pMG5tOXZsdDE4bDY1OTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=emgtdHcudGFpd2FuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23E67C73&color=%23C0CA33&color=%23B39DDB&color=%23D81B60&color=%23AD1457&color=%238E24AA&color=%23E4C441&color=%230B8043"
        width="800"
        height="600"
        scrolling="no"
      />
    </section>
  );
}
