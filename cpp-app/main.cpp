
#include <iostream>
#include <cstdlib>

int main() {
    const char* port = std::getenv("PORT");

    if (port != nullptr) {
        std::cout << "PATH environment variable: " << port << '\n';
    } else {
        std::cout << "Environment variable 'PORT' not found." << '\n';
    }

    return 0;
}

