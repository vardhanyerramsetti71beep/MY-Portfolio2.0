// src/components/ManifestoSection.jsx
import React from 'react';

export default function ManifestoSection() {
  return (
    <section className="about" id="about" aria-label="About">
      <div className="about-kicker">ABOUT</div>

      <p className="manifesto" id="manifesto">
        I build where Python backends meet cloud infrastructure and applied machine learning. From normalized MySQL schemas and query tuning to FastAPI services and OpenCV pipelines, I care about software that is fast, reliable, and measurable.
      </p>

      <div className="about-cols">
        <div>
          <h4 className="about-subhead">Databases &amp; Performance</h4>
          <p>
            Shipped 8 live projects across AWS and Vercel. Cut query time from 18.4ms to 13.8ms (-25%) by adding compound B-Tree indexes on (tenant_id, status). When a system slows down, I look at the data layer first.
          </p>
        </div>
        <div>
          <h4 className="about-subhead">Cloud &amp; AWS</h4>
          <p>
            AWS Certified Cloud Practitioner (2023). Hands-on with EC2 hosting, S3 storage with TLS 1.2+ policies, IAM least-privilege access, and Docker containers in deployed projects.
          </p>
        </div>
      </div>
    </section>
  );
}
