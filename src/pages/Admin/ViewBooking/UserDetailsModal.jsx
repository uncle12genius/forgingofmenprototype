export default function UserDetailsModal({ user, onClose, onSchedule }) {
  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-teal-500 px-6 py-4 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-white">Client Details</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Client Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-600">Full Name</label>
                  <p className="text-gray-900 font-medium">{user.user?.name || user.userName || 'Not provided'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Email Address</label>
                  <p className="text-gray-900">{user.user?.email || user.email || 'Not provided'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Phone Number</label>
                  <p className="text-gray-900">{user.user?.phone || user.phone || 'Not provided'}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Session Details</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-600">Session Type</label>
                  <p className="text-gray-900 font-medium">{user.sessionType || 'Individual Therapy'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Session Title</label>
                  <p className="text-gray-900">{user.sessionTitle || user.session?.title || 'Not specified'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Booking Date</label>
                  <p className="text-gray-900">{new Date(user.date || user.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Reason for Therapy */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Reason for Therapy</h3>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                {user.reason || user.therapyReason || user.description || 
                 'No specific reason provided by the client.'}
              </p>
            </div>
          </div>

          {/* Additional Notes */}
          {(user.notes || user.additionalInfo) && (
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Additional Notes</h3>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-gray-700 leading-relaxed">{user.notes || user.additionalInfo}</p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
            <button
              onClick={onSchedule}
              className="px-6 py-2 bg-gradient-to-r from-green-600 to-teal-500 text-white rounded-xl hover:from-green-700 hover:to-teal-600 transition-colors shadow-lg"
            >
              Schedule Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}