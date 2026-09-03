/**
 * TrustSection — Server Component.
 * Presents key factual customer confidence and service details supported by project data.
 */
export default function TrustSection() {
  const trustPoints = [
    {
      title: "Direct Weaver Connection",
      description: "Direct relationship with Puttapaka weaver families without unnecessary intermediary markups.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-[var(--accent)]" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.25A2.25 2.25 0 0 1 0 18.75V10.5M13.5 21h4.5s.75 0 .75-.75V10.5m-4.5 0H2.25m11.25 0H2.25m11.25 0h7.5A2.25 2.25 0 0 0 23.25 8.25V5.25a2.25 2.25 0 0 0-2.25-2.25H3A2.25 2.25 0 0 0 .75 5.25v3" />
        </svg>
      ),
    },
    {
      title: "WhatsApp Personal Assistance",
      description: "Instant chat to verify stock, request additional photos, or discuss custom color options.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-[var(--accent)]" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a.75.75 0 0 1-.816-.983 4.5 4.5 0 0 0 .736-2.023A8.25 8.25 0 0 1 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
        </svg>
      ),
    },
    {
      title: "Authentic Photography",
      description: "All product photos feature real handloom sarees woven in our village.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-[var(--accent)]" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316A2.192 2.192 0 0 0 14.504 4h-5.008c-.734 0-1.41.36-1.815.932l-.854 1.243Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
        </svg>
      ),
    },
    {
      title: "All-India Delivery Available",
      description: "Delivery available across India with shipping details confirmed directly over WhatsApp.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-[var(--accent)]" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v11.177M14.25 7.573V3.75a1.125 1.125 0 0 0-1.125-1.125H3.375A1.125 1.125 0 0 0 2.25 3.75v10.5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[var(--surface)] border-y border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((item, index) => (
            <div key={index} className="flex flex-col space-y-3">
              <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--background)] border border-[var(--border)] flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <h3 className="text-body-lg font-medium text-[var(--primary)]">
                {item.title}
              </h3>
              <p className="text-body-sm text-[var(--muted)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
