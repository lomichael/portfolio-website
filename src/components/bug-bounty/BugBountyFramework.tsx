"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft, Search, Server, Shield, AlertCircle } from 'lucide-react';

const BugBountyFramework = () => {
  const [targetDomain, setTargetDomain] = useState('');
  const [scanResults] = useState({
    subdomains: [
      { domain: 'dev.example.com', status: 'active', ports: [80, 443, 8080] },
      { domain: 'api.example.com', status: 'active', ports: [443, 8443] },
      { domain: 'staging.example.com', status: 'active', ports: [80, 443] }
    ],
    vulnerabilities: [
      { type: 'Open Port', severity: 'Low', details: 'Port 8080 exposed on dev subdomain' },
      { type: 'SSL Issue', severity: 'Medium', details: 'Outdated SSL certificate on api subdomain' },
      { type: 'Missing Headers', severity: 'Low', details: 'Security headers not properly configured' }
    ],
    technologies: [
      { name: 'nginx', version: '1.18.0' },
      { name: 'Python', version: '3.8' },
      { name: 'React', version: '18.2' }
    ]
  });

  return (
    <div className="container mx-auto p-6">
      <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft size={20} />
        <span>Back to Portfolio</span>
      </Link>

      <h1 className="text-3xl font-bold mb-6">Bug Bounty Framework</h1>

      <div className="mb-8">
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Enter target domain"
            className="flex-1 p-2 border rounded"
            value={targetDomain}
            onChange={(e) => setTargetDomain(e.target.value)}
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2">
            <Search size={20} />
            <span>Start Scan</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-600">Subdomains Found</h3>
                <p className="text-2xl font-bold">{scanResults.subdomains.length}</p>
              </div>
              <Server className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-600">Technologies Detected</h3>
                <p className="text-2xl font-bold">{scanResults.technologies.length}</p>
              </div>
              <Shield className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-600">Potential Vulnerabilities</h3>
                <p className="text-2xl font-bold">{scanResults.vulnerabilities.length}</p>
              </div>
              <AlertCircle className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Discovered Subdomains</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {scanResults.subdomains.map((subdomain, index) => (
                <div key={index} className="border-b pb-2">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{subdomain.domain}</span>
                    <span className="text-green-500 text-sm">{subdomain.status}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Open Ports: {subdomain.ports.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Detected Vulnerabilities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {scanResults.vulnerabilities.map((vuln, index) => (
                <div key={index} className="border-b pb-2">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{vuln.type}</span>
                    <span className={`text-sm px-2 py-1 rounded ${
                      vuln.severity === 'High' ? 'bg-red-100 text-red-800' :
                      vuln.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {vuln.severity}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">{vuln.details}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BugBountyFramework;