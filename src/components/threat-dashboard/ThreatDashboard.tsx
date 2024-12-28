"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Shield, AlertTriangle, Server, Bug } from 'lucide-react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const ThreatDashboard = () => {
  const [threatData] = useState({
    recentThreats: [
      { id: 1, name: 'APT28', target: 'Government', confidence: 'High', timestamp: '2024-03-28' },
      { id: 2, name: 'APT29', target: 'Healthcare', confidence: 'Medium', timestamp: '2024-03-27' },
      { id: 3, name: 'APT41', target: 'Technology', confidence: 'High', timestamp: '2024-03-26' },
    ],
    aptActivity: [
      { date: '2024-03-22', incidents: 12 },
      { date: '2024-03-23', incidents: 8 },
      { date: '2024-03-24', incidents: 15 },
      { date: '2024-03-25', incidents: 10 },
      { date: '2024-03-26', incidents: 20 },
      { date: '2024-03-27', incidents: 18 },
      { date: '2024-03-28', incidents: 25 },
    ],
    riskScores: [
      { sector: 'Government', score: 85 },
      { sector: 'Healthcare', score: 75 },
      { sector: 'Technology', score: 70 },
      { sector: 'Finance', score: 80 },
    ]
  });

  return (
    <div className="container mx-auto p-6">
      <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft size={20} />
        <span>Back to Portfolio</span>
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Threat Intelligence Dashboard</h1>
        <p className="text-gray-600">Real-time APT activity monitoring and analysis</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-gray-600">Active APTs</p>
              <p className="text-2xl font-bold">23</p>
            </div>
            <Shield className="h-8 w-8 text-blue-500" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-gray-600">Critical Alerts</p>
              <p className="text-2xl font-bold">7</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-gray-600">Compromised Infrastructure</p>
              <p className="text-2xl font-bold">12</p>
            </div>
            <Server className="h-8 w-8 text-yellow-500" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-gray-600">Malware Variants</p>
              <p className="text-2xl font-bold">31</p>
            </div>
            <Bug className="h-8 w-8 text-purple-500" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="h-96">
          <CardHeader>
            <CardTitle>APT Activity Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={threatData.aptActivity}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="incidents" stroke="#2563eb" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="h-96">
          <CardHeader>
            <CardTitle>Recent APT Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {threatData.recentThreats.map((threat) => (
                <div key={threat.id} className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-semibold">{threat.name}</p>
                    <p className="text-sm text-gray-600">Target: {threat.target}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded text-sm ${
                      threat.confidence === 'High' ? 'bg-red-100 text-red-800' :
                      threat.confidence === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {threat.confidence}
                    </span>
                    <p className="text-sm text-gray-500 mt-1">{threat.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sector Risk Assessment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {threatData.riskScores.map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="w-24 text-gray-600">{item.sector}</span>
                <div className="flex-1 h-4 bg-gray-100 rounded overflow-hidden">
                  <div 
                    className="h-full bg-blue-500"
                    style={{ width: `${item.score}%` }}
                  />
                </div>
                <span className="w-12 text-right text-gray-600">{item.score}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThreatDashboard;