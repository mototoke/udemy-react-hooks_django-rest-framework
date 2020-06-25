from rest_framework import permissions


class ProfilePermission(permissions.BasePermission):

    
    def _has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        return False
        