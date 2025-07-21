import React from "react";

const Exppage = () => {
  return (
    <div className="min-h-screen px-6 py-10 font-sans">
       <h2 className="text-xl text-center dark:text-neutral-400 font-InterBold uppercase mb-8">
            Experience
          </h2>

           {/* HPE Experience */}
      <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg max-w-3xl mx-auto mb-7">
        <h2 className="text-2xl font-semibold text-cyan-400">
          Capacity Advisor Project | Project Intern – Hewlett Packard Enterprise (HPE CTY)
        </h2>
        <p className="text-sm text-gray-400">Feb 2025 – July 2025</p>

        <ul className="mt-6 list-disc list-inside space-y-3">
          <li>
            Worked on an internal R&D initiative to build a resource forecasting tool, focusing on real-time monitoring and capacity planning in Kafka-powered systems.
          </li>
          <li>
            Integrated monitoring stacks using Prometheus, and Node Exporter , JMX Exporter to collect detailed performance metrics of Apache Kafka Broker.
          </li>
          <li>
            Helped create synthetic workloads to simulate CPU spikes, memory pressure, disk I/O bottlenecks, and network congestion, enabling stress testing at scale.
          </li>
          <li>
            Co-developed a prototype ML pipeline that used patterns in JMX and system metrics to predict fault scenarios—particularly Kafka broker instability and crash trends.
          </li>
        </ul>
      </div>

      <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-cyan-400">
          LRN System | Software Development Intern – NALCO
        </h2>
        <p className="text-sm text-gray-400">June 2024 – July 2024</p>

        <ul className="mt-6 list-disc list-inside space-y-3">
          <li>
            Collaborated closely with the Systems Department at NALCO , Bhubanewar to build an internal tool that automated leave request notifications,
            replacing their manual, error-prone workflow with a modern desktop application.
          </li>
          <li>
            Engineered a cross-platform desktop app using Electron, React, and Express—seamlessly connecting frontend and backend services into a single cohesive system.
          </li>
          <li>
            Implemented a timed scheduling system that pushed updates every 30 minutes, ensuring HR and team leads stayed informed in near real-time without needing to refresh or intervene.
          </li>
          <li>
            Delivered a solution that became actively adopted within the organization, streamlining internal communication for employees and demonstrating measurable improvements in accuracy and efficiency.
          </li>
        </ul>
      </div>

      


    </div>
  );
};

export default Exppage;
