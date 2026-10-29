// src/components/ManifestoSection.jsx
import React from 'react';

export default function ManifestoSection() {
  return (
    <section className="about" id="about" aria-label="Engineering Philosophy">
      <div className="about-kicker">PHILOSOPHY // 0xCORE</div>

      <p className="manifesto" id="manifesto">
        I engineer at the boundary where high-throughput backend systems meet cloud infrastructure and applied machine intelligence. From relational query latency optimization and normalized 3NF schemas to asynchronous microservices, I build software that performs with uncompromising speed, resilience, and mathematical clarity.
      </p>

      <div className="about-cols">
        <div>
          <h4 className="about-subhead">Deterministic Scale &amp; Database Latency</h4>
          <p>
            Shipped 8 production platforms across AWS and Vercel. Measured a verified 25% query latency reduction by restructuring relational database schemas and building compound B-Tree indexes. When systems buckle under load, the fix is rarely adding more memory—it is eliminating architectural bottlenecks at the data layer.
          </p>
        </div>
        <div>
          <h4 className="about-subhead">Cloud Foundation &amp; AWS Mastery</h4>
          <p>
            Officially certified by Amazon Web Services as an AWS Certified Cloud Practitioner. Proven command over EC2 compute instances, S3 object storage lakes, IAM least-privilege security perimeters, and containerized Docker deployments. Ready to deliver immediate impact on Day 1.
          </p>
        </div>
      </div>
    </section>
  );
}
